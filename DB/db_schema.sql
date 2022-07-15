
//Base Tables
create table project_role (role_id varchar(20), role_name varchar(50), primary key (role_id));
create table case_severity (severity_id varchar(20), severity_name varchar(30), primary key (severity_id));
create table case_status (status_id varchar(20), status_name varchar(30), primary key (status_id));
create table case_attachment ( attachment_id varchar(20), attachment_name varchar(50), primary key (attachment_id));
create table project (project_id varchar(50), project_name varchar(100), primary key (project_id));

//User Table
CREATE TABLE users (
user_id VARCHAR(50) NOT NULL, 
date_update DATETIME NOT NULL, 
width_icon NUMERIC(8,4), 
height_icon  NUMERIC(8,4), 
fname VARCHAR(50) NOT NULL, 
lname VARCHAR(50) NOT NULL, 
username varchar(100), 
role_id varchar(20),
PRIMARY KEY(user_id), 
foreign key (role_id) 
references 
project_role (role_id)
ON DELETE CASCADE
);

//Ticket Table
CREATE TABLE ticket (
ticket_number VARCHAR(50) PRIMARY KEY, 
ticket_name VARCHAR(100),
detail VARCHAR(200), 
creation_time DATETIME NOT NULL, 
related_component VARCHAR(50), 
case_submitter varchar(50),
case_severity varchar(20),
status_name varchar(20),
assigned_to varchar(50),
attachments varchar(20),
project_name varchar(50),
foreign key (case_submitter) references users (user_id), 
foreign key (case_severity) references case_severity (severity_id), 
foreign key (status_name) references  case_status (status_id), 
foreign key (assigned_to) references users (user_id), 
foreign key (attachments) references case_attachment (attachment_id), 
foreign key( project_name) references project (project_id)
)

