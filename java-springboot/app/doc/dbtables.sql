
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
  
  
  
create table study_account (
  act_no   integer     not null,
  email    varchar(50) not null,
  pwd      varchar(100)not null,
  created_dt datetime not null default now()  
);

alter table study_account
  add constraint PK_study_account primary key (act_no),
  modify column act_no integer not null auto_increment;

alter table study_account
  add constraint UK_study_account unique (email);