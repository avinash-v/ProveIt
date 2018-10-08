CREATE TABLE [dbo].[USER]
(
	[UserId] INT NOT NULL PRIMARY KEY, 
    [user] VARCHAR(50) NOT NULL, 
    [password] VARCHAR(MAX) NOT NULL, 
    [email] NVARCHAR(50) NULL
)
