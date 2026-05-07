create table if not exists cats (
  id text primary key,
  name text not null,
  age numeric,
  weight numeric,
  condition text,
  updated_at timestamptz default now()
);

create table if not exists cat_records (
  id text primary key,
  cat_id text not null references cats(id) on delete cascade,
  date date,
  time text,
  period text,
  glucose numeric,
  insulin numeric,
  weight numeric,
  food text,
  calories numeric,
  note text,
  updated_at timestamptz default now()
);

alter table cats enable row level security;
alter table cat_records enable row level security;

drop policy if exists "public read cats" on cats;
drop policy if exists "public write cats" on cats;
drop policy if exists "public read records" on cat_records;
drop policy if exists "public write records" on cat_records;

create policy "public read cats"
on cats for select
to anon
using (true);

create policy "public write cats"
on cats for all
to anon
using (true)
with check (true);

create policy "public read records"
on cat_records for select
to anon
using (true);

create policy "public write records"
on cat_records for all
to anon
using (true)
with check (true);
