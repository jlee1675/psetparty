class Student:
	def __init__(self, name, subject, time, kerb):
		self.name = name
		self.subject = subject
		self.time = time
		self.kerberos = kerb
	
	def get_name(self):
		return self.name

	def get_time(self):
		return self.time

	def get_kerb(self):
		return self.kerberos

	def get_time(self):
		return self.time

	def get_subject(self):
		return self.subject

	def __str__(self):
		return str(self.get_name() + ", " + self.get_time() + ", " + self.get_kerb() + ", " + self.get_time())

students = [Student("Jessica", "18.022", "01:00", "jlee"), Student("Tanya", "18.02", "03:00", "tanyang")]


name = input("What is your name? ")
subject = input("What subject are you psetting? Please enter course number. ")
time = input("List one time that you are available in format XX:XX. ")
kerberos = input("What is your kerberos? ")



avail_stud_time_str = ""
avail_stud_str = ""

for student in students:
	if subject == student.get_subject():
		if time == student.get_time():
			avail_stud_time_str += student.get_name() + ": " + student.get_kerb() + ", "
		else:
			avail_stud_str += student.get_name() + ": " + student.get_kerb() + ", "



if avail_stud_time_str == "":
	print("There are no students currently available to study at the same time. These are the students that are working on the same pset: " + avail_stud_str)
else:
	print("These are the students that are working on the same pset at the same time: " + avail_stud_time_str)


students.append(Student(name, subject, time, kerberos))



