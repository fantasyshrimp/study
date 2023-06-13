
create table study_simplechat (
  chat_no   integer     not null,
  name      varchar(8)  not null,
  msg       varchar(25) not null,
  send_dt   datetime    not null default now()
);

alter table study_simplechat
  add constraint PK_study_simplechat
  primary key (
    chat_no
  );

alter table study_simplechat
  modify column chat_no integer not null auto_increment;