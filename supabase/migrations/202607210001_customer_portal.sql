create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  company text not null default '',
  phone text not null default '',
  location text not null default '',
  marketing_consent boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  status text not null default 'New' check (status in ('New', 'In Progress', 'Resolved', 'Closed')),
  subject text not null default '',
  message text not null default '',
  submitted_at timestamptz not null default now()
);

create table if not exists public.registered_systems (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_name text not null,
  serial_number text not null,
  installation_date date,
  warranty_expiry date,
  installer_name text not null default '',
  created_at timestamptz not null default now(),
  unique (user_id, serial_number)
);

create table if not exists public.support_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  message text not null,
  status text not null default 'Open' check (status in ('Open', 'In Progress', 'Resolved', 'Closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.enquiries enable row level security;
alter table public.registered_systems enable row level security;
alter table public.support_requests enable row level security;

create policy "Users can view their profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update their profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "Users can view their enquiries" on public.enquiries for select using (auth.uid() = user_id);
create policy "Users can create their enquiries" on public.enquiries for insert with check (auth.uid() = user_id);
create policy "Users can view their systems" on public.registered_systems for select using (auth.uid() = user_id);
create policy "Users can register systems" on public.registered_systems for insert with check (auth.uid() = user_id);
create policy "Users can update their systems" on public.registered_systems for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can remove their systems" on public.registered_systems for delete using (auth.uid() = user_id);
create policy "Users can view their support requests" on public.support_requests for select using (auth.uid() = user_id);
create policy "Users can create support requests" on public.support_requests for insert with check (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at before update on public.profiles for each row execute function public.set_updated_at();
drop trigger if exists support_requests_set_updated_at on public.support_requests;
create trigger support_requests_set_updated_at before update on public.support_requests for each row execute function public.set_updated_at();
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

insert into public.profiles (id, full_name)
select id, coalesce(raw_user_meta_data ->> 'full_name', '') from auth.users
on conflict (id) do nothing;

create index if not exists enquiries_user_submitted_idx on public.enquiries(user_id, submitted_at desc);
create index if not exists registered_systems_user_idx on public.registered_systems(user_id);
create index if not exists support_requests_user_created_idx on public.support_requests(user_id, created_at desc);
