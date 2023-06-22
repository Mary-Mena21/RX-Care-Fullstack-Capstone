/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[Type]
      ,[Img]
      ,[FirstName]
      ,[LastName]
      ,[Email]
  FROM [RXCareDb].[dbo].[User]
  --https://i.ibb.co/hYzd75J/doctor1.jpg