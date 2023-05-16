-- Insert 5 doctors
INSERT INTO [User] ([Id], [Type], [Img], [FirstName], [LastName], [Email])
VALUES
  (1, 'Doctor', 'doctor1.jpg', 'John', 'Doe', 'johndoe@example.com'),
  (2, 'Doctor', 'doctor2.jpg', 'Jane', 'Smith', 'janesmith@example.com'),
  (3, 'Doctor', 'doctor3.jpg', 'Michael', 'Johnson', 'michaeljohnson@example.com'),
  (4, 'Doctor', 'doctor4.jpg', 'Emily', 'Williams', 'emilywilliams@example.com'),
  (5, 'Doctor', 'doctor5.jpg', 'David', 'Brown', 'davidbrown@example.com');

-- Insert 15 patients
INSERT INTO [User] ([Id], [Type], [Img], [FirstName], [LastName], [Email])
VALUES
  (6, 'Patient', 'patient1.jpg', 'Sarah', 'Wilson', 'sarahwilson@example.com'),
  (7, 'Patient', 'patient2.jpg', 'James', 'Taylor', 'jamestaylor@example.com'),
  (8, 'Patient', 'patient3.jpg', 'Jessica', 'Anderson', 'jessicaanderson@example.com'),
  (9, 'Patient', 'patient4.jpg', 'Christopher', 'Lee', 'christopherlee@example.com'),
  (10, 'Patient', 'patient5.jpg', 'Amanda', 'Thomas', 'amandathomas@example.com'),
  (11, 'Patient', 'patient6.jpg', 'Matthew', 'Harris', 'matthewharris@example.com'),
  (12, 'Patient', 'patient7.jpg', 'Olivia', 'Clark', 'oliviaclark@example.com'),
  (13, 'Patient', 'patient8.jpg', 'Daniel', 'Lewis', 'daniellewis@example.com'),
  (14, 'Patient', 'patient9.jpg', 'Sophia', 'Martin', 'sophiamartin@example.com'),
  (15, 'Patient', 'patient10.jpg', 'Andrew', 'Turner', 'andrewturner@example.com'),
  (16, 'Patient', 'patient11.jpg', 'Elizabeth', 'Scott', 'elizabethscott@example.com'),
  (17, 'Patient', 'patient12.jpg', 'Joshua', 'Young', 'joshuayoung@example.com'),
  (18, 'Patient', 'patient13.jpg', 'Madison', 'Walker', 'madisonwalker@example.com'),
  (19, 'Patient', 'patient14.jpg', 'Christopher', 'Green', 'christophergreen@example.com'),
  (20, 'Patient', 'patient15.jpg', 'Isabella', 'Baker', 'isabellabaker@example.com');
---------------------------------------------------------------------------------------------------

-- Insert 5 doctors
INSERT INTO [Doctor] ([Id], [UserId], [ClinicId])
VALUES
  (1, 1, 1),
  (2, 2, 1),
  (3, 3, 2),
  (4, 4, 2),
  (5, 5, 3);
---------------------------------------------------------------------------------------------------
-- Insert 15 patients
INSERT INTO [Patient] ([Id], [UserId], [DoctorId], [DoB], [Address], [Phone], [Height], [Weight], [Note])
VALUES
  (1, 6, 1, '1990-01-01', '123 Main St, Nashville, TN', '615-555-1234', 68.5, 150.0, 'Allergic to penicillin'),
  (2, 7, 1, '1991-02-02', '456 2nd Ave, Memphis, TN', '901-555-2345', 72.0, 170.0, 'History of asthma'),
  (3, 8, 2, '1992-03-03', '789 3rd St, Knoxville, TN', '865-555-3456', 63.0, 120.0, 'High blood pressure'),
  (4, 9, 2, '1993-04-04', '321 4th Ave, Nashville, TN', '615-555-4567', 64.5, 130.0, ''),
  (5, 10, 3, '1994-05-05', '654 5th St, Chattanooga, TN', '423-555-5678', 70.0, 160.0, 'Previous heart surgery'),
  (6, 11, 3, '1995-06-06', '987 6th Ave, Memphis, TN', '901-555-6789', 65.0, 125.0, 'Peanut allergy'),
  (7, 12, 4, '1996-07-07', '246 7th St, Nashville, TN', '615-555-7890', 73.0, 180.0, ''),
  (8, 13, 4, '1997-08-08', '369 8th Ave, Knoxville, TN', '865-555-8901', 66.5, 135.0, ''),
  (9, 14, 5, '1998-09-09', '582 9th St, Memphis, TN', '901-555-9012', 71.0, 155.0, ''),
  (10, 15, 5, '1999-10-10', '753 10th Ave, Nashville, TN', '615-555-0123', 69.5, 145.0, 'Diabetic'),
  (11, 16, 1, '2000-11-11', '951 11th St, Chattanooga, TN', '423-555-2345', 67.0, 140.0, ''),
  (12, 17, 1, '2001-12-12', '864 12th Ave, Knoxville, TN', '865-555-3456', 68.5, 150.0, ''),
  (13, 18, 2, '2002-01-13', '753 13th St, Memphis, TN', '901-555-4567', 64.0, 125.0, 'Allergic to shellfish'),
  (14, 19, 2, '2003-02-14', '246 14th Ave, Nashville, TN', '615-555-5678', 71.5, 165.0, ''),
  (15, 20, 2, '2001-05-03', '254 11th Ave, Nashville, TN', '615-555-5988', 91.5, 175.0, '')
  ---------------------------------------------------------------------------------------------------

  -- Insert sample data for Clinic table with zip codes
INSERT INTO [Clinic] ([Id], [Address], [Phone], [Facility], [Type], [Location])
VALUES
  (1, '123 Main St, Nashville, TN 37201', '615-555-1234', 'ABC Clinic', 'Hospital', 'Nashville'),
  (2, '456 2nd Ave, Memphis, TN 38103', '901-555-2345', 'XYZ Clinic', 'Clinic', 'Memphis'),
  (3, '789 3rd St, Knoxville, TN 37902', '865-555-3456', 'PQR Hospital', 'Hospital', 'Knoxville'),
  (4, '321 4th Ave, Nashville, TN 37201', '615-555-4567', 'MNO Clinic', 'Clinic', 'Nashville'),
  (5, '654 5th St, Chattanooga, TN 37402', '423-555-5678', 'DEF Hospital', 'Hospital', 'Chattanooga');
------------------------------------------------------------------------------------------------------

-- Insert sample data for Medicine table
INSERT INTO [Medicine] ([Id], [MedicineName], [ImgUrl], [Form], [SideEffects], [DrugInfo])
VALUES
  (1, 'Medicine 1', 'medicine1.jpg', 'Tablet', 'Headache, Nausea', 'This medicine is used to treat...'),
  (2, 'Medicine 2', 'medicine2.jpg', 'Capsule', 'Dizziness, Dry mouth', 'This medicine should be taken...'),
  (3, 'Medicine 3', 'medicine3.jpg', 'Syrup', 'Upset stomach, Fatigue', 'Avoid alcohol while taking this medicine...'),
  (4, 'Medicine 4', 'medicine4.jpg', 'Injection', 'Pain at injection site, Fever', 'This medicine should be administered by a healthcare professional...'),
  (5, 'Medicine 5', 'medicine5.jpg', 'Ointment', 'Skin irritation, Allergic reaction', 'Apply a thin layer of this ointment...'),
  (6, 'Medicine 6', 'medicine6.jpg', 'Drops', 'Blurred vision, Eye irritation', 'Shake well before using and administer the prescribed number of drops...');
-------------------------------------------------------------------------------------------------------

-- Insert sample data for prescription table
INSERT INTO [Prescription] ([Id], [MedicineId], [Dosage], [Quantity], [PatientId])
VALUES
  (1, 1, '1 tablet twice daily', 30, 1),
  (2, 2, '1 capsule daily', 60, 2),
  (3, 3, '2 teaspoons three times a day', 90, 3),
  (4, 4, '1 injection every week', 4, 4),
  (5, 5, 'Apply a thin layer twice daily', 1, 5),
  (6, 1, '1 tablet twice daily', 30, 6),
  (7, 2, '1 capsule daily', 60, 7),
  (8, 3, '2 teaspoons three times a day', 90, 8),
  (9, 4, '1 injection every week', 4, 9),
  (10, 5, 'Apply a thin layer twice daily', 1, 10),
  (11, 1, '1 tablet twice daily', 30, 11),
  (12, 2, '1 capsule daily', 60, 12),
  (13, 3, '2 teaspoons three times a day', 90, 13),
  (14, 4, '1 injection every week', 4, 14),
  (15, 5, 'Apply a thin layer twice daily', 1, 15);
-------------------------------------------------------------------------------------------------------

INSERT INTO [AdminsteredDose] ([Id], [Day], [prescriptionId])
VALUES
  (1, '2023-05-01', 1),
  (2, '2023-05-02', 2),
  (3, '2023-05-03', 3),
  (4, '2023-05-04', 4),
  (5, '2023-05-05', 5),
  (6, '2023-05-06', 6),
  (7, '2023-05-07', 7),
  (8, '2023-05-08', 8),
  (9, '2023-05-09', 9),
  (10, '2023-05-10', 10),
  (11, '2023-05-11', 11),
  (12, '2023-05-12', 12),
  (13, '2023-05-13', 13),
  (14, '2023-05-14', 14),
  (15, '2023-05-15', 15);
  ------------------------------------------------------------------------------------------------------

  -- Insert sample data for Comment table
INSERT INTO [Comment] ([Id], [PatientId], [MedicineId], [PComment], [PCommentDate], [DComment], [DCommentDate])
VALUES
  (1, 6, 1, 'This medicine helped me relieve my headache. No side effects.', '2023-05-01', 'Glad to hear that. Keep taking the medicine as prescribed.', '2023-05-02'),
  (2, 7, 2, 'I felt nauseous after taking this medicine.', '2023-05-03', 'Try taking it after a meal and drink plenty of water. If the side effects persist, let me know.', '2023-05-04'),
  (3, 8, 3, 'I have trouble sleeping and this medicine doesn''t seem to help.', '2023-05-05', 'We may need to adjust the dosage or switch to a different medication. Let''s discuss this on your next appointment.', '2023-05-06'),
  (4, 9, 4, 'I had an allergic reaction to this medicine. My throat felt itchy and my face swelled up.', '2023-05-07', 'Stop taking the medicine immediately and go to the emergency room. This is a severe allergic reaction.', '2023-05-08'),
  (5, 10, 5, 'I forgot to take this medicine yesterday. Should I take a double dose today?', '2023-05-09', 'No, just take the regular dose today. It''s important to stick to the prescribed dosage.', '2023-05-10'),
  (6, 11, 6, 'This medicine is working well for me. Thank you!', '2023-05-11', 'Great to hear that. Let me know if you have any questions or concerns.', '2023-05-12'),
  (7, 12, 7, 'I have a rash after taking this medicine.', '2023-05-13', 'Please stop taking the medicine and come to the clinic for an evaluation.', '2023-05-14'),
  (8, 13, 8, 'I''m experiencing some dizziness after taking this medicine.', '2023-05-15', 'This can be a side effect of the medication. Let''s discuss it on your next appointment and see if we need to adjust the dosage or switch to a different medication.', '2023-05-16'),
  (9, 14, 9, 'This medicine is not helping with my pain.', '2023-05-17', 'Let''s schedule an appointment to discuss other pain management options.', '2023-05-18'),
  (10, 15, 10, 'I have trouble remembering to take this medicine every day.', '2023-05-19', 'Consider setting an alarm on your phone or using a pill reminder app to help you remember. Let''s also discuss other options on your next appointment.', '2023-05-20');

  -- Insert more sample data for Comment table
INSERT INTO [Comment] ([Id], [PatientId], [MedicineId], [PComment], [PCommentDate], [DComment], [DCommentDate])
VALUES
  (11, 16, 11, 'I have been experiencing some stomach discomfort after taking this medicine.', '2023-05-21', 'Try taking it with food to see if it helps alleviate the discomfort. If the symptoms persist, let me know.', '2023-05-22'),
  (12, 17, 12, 'I accidentally missed a dose of this medicine. What should I do?', '2023-05-23', 'Take the missed dose as soon as you remember, unless it''s close to the time for the next dose. Do not double dose. Just continue with the regular schedule.', '2023-05-24'),
  (13, 18, 13, 'I''ve noticed an improvement in my symptoms since starting this medicine.', '2023-05-25', 'That''s great to hear! Let''s continue monitoring your progress during your next visit.', '2023-05-26'),
  (14, 19, 14, 'I''m experiencing some mild drowsiness after taking this medicine.', '2023-05-27', 'Drowsiness can be a common side effect. Make sure to avoid driving or operating heavy machinery if you feel excessively drowsy. Let''s discuss it further on your next appointment.', '2023-05-28'),
  (15, 20, 15, 'I have questions about the instructions for taking this medicine.', '2023-05-29', 'I''m here to help. Let''s schedule a consultation to address your questions and concerns.', '2023-05-30');
