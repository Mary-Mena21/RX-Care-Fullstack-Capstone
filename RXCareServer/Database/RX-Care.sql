
CREATE TABLE [User] (
  [Id] int PRIMARY KEY,
  [Type] nvarchar(255),
  [Img] varchar(50),
  [FirstName] varchar(50),
  [LastName] varchar(50),
  [Email] varchar(255)
)
GO

CREATE TABLE [Doctor] (
  [Id] int PRIMARY KEY,
  [UserId] int,
  [ClinicId] int
)
GO

CREATE TABLE [Patient] (
  [Id] int PRIMARY KEY,
  [UserId] int,
  [DoctorId] int,
  [DoB] Date,
  [Address] varchar(2048),
  [Phone] varchar(50),
  [Height] decimal,
  [Weight] decimal,
  [Note] varchar(2048)
)
GO

CREATE TABLE [Medicine] (
  [Id] int PRIMARY KEY,
  [MedicineName] varchar(50),
  [ImgUrl] varchar(50),
  [Form] varchar(50),
  [SideEffects] varchar(MAX),
  [DrugInfo] varchar(MAX)
)
GO

CREATE TABLE [prescription] (
  [Id] int PRIMARY KEY,
  [MedicineId] int,
  [Dosage] varchar(50),
  [Quantity] int,
  [PatientId] int
)
GO

CREATE TABLE [AdminsteredDose] (
  [Id] int PRIMARY KEY,
  [Day] Date,
  [prescriptionId] int
)
GO

CREATE TABLE [Clinic] (
  [Id] int PRIMARY KEY,
  [Address] varchar(2048),
  [Phone] varchar(50),
  [Facility] varchar(255),
  [Type] varchar(50),
  [Location] varchar(50)
)
GO

CREATE TABLE [Comment] (
  [Id] int PRIMARY KEY,
  [PatientId] int,
  [MedicineId] int,
  [PComment] varchar(2048),
  [PCommentDate] Date,
  [DComment] varchar(2048),
  [DCommentDate] Date
)
GO

ALTER TABLE [Doctor] ADD FOREIGN KEY ([ClinicId]) REFERENCES [Clinic] ([Id])
GO

ALTER TABLE [Patient] ADD FOREIGN KEY ([DoctorId]) REFERENCES [Doctor] ([Id])
GO

ALTER TABLE [prescription] ADD FOREIGN KEY ([MedicineId]) REFERENCES [Medicine] ([Id])
GO

ALTER TABLE [prescription] ADD FOREIGN KEY ([PatientId]) REFERENCES [Patient] ([Id])
GO

ALTER TABLE [AdminsteredDose] ADD FOREIGN KEY ([prescriptionId]) REFERENCES [prescription] ([Id])
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([PatientId]) REFERENCES [Patient] ([Id])
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([MedicineId]) REFERENCES [Medicine] ([Id])
GO

ALTER TABLE [Doctor] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Patient] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO
