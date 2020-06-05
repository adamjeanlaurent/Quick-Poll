create table polls (
	pollId int not null AUTO_INCREMENT primary key,
	title varchar(100) not null,
	created_at timestamp not null default NOW(),
	pollVotes int not null
)

create table questions (
	questionId int not null AUTO_INCREMENT primary key,
	questionPrompt varchar(300) not null,
	created_at timestamp not null default NOW(),
	parentPollId int not null,
	FOREIGN KEY (parentPollId)
		REFERENCES polls(pollId)
		ON DELETE CASCADE
)

create table answers (
	answerId int not null AUTO_INCREMENT primary key,
	answerPrompt varchar(300) not null,
	answerVotes int not null,
	created_at timestamp not null DEFAULT NOW(),
	parentQuestionId int not null,
	FOREIGN KEY (parentQuestionId)
		REFERENCES questions(questionId)
		ON DELETE CASCADE
)