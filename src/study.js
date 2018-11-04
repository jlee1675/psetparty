class Student {
    constructor(name, subject, time, kerb) {
        this.name = name;
        this.subject = subject;
        this.time = time;
        this.kerb = kerb;
    }
    get_name() {
        return this.name;
    }
    get_subject() {
        return this.subject;
    }
    get_time() {
        return this.time;
    }
    get_kerb() {
        return this.kerb;
    }
    toString() {
        return `(${this.name}, ${this.subject}, ${this.kerb}, ${this.time})`
    }
}
const student1 = new Student ('Jessica', '18.022', '1:00', 'jlee');
const student2 = new Student ('Tanya', '18.02', '3:00', 'tanyang');
var students = [student1, student2];


/* won't need the inputs like this because of the form, but i can't append (see later comments)
name = input("What is your name? ")
subject = input("What subject are you psetting? Please enter course number. ")
time = input("List one time that you are available in format XX:XX. ")
kerberos = input("What is your kerberos? ") */



var avail_stud_time_str = '';
var avail_stud_str = '';

for (let student in students) {
    if (subject == student.get_subject()) {
        if (time == student.get_time()) {
            avail_stud_time_str += student.get_name() + ': ' + student.get_kerb() + ', ';   
        } else {
            avail_stud_str += student.get_name() + ': ' + student.get_kerb() + ', '
        }
    }
}

/* tbh don't know how to write good docstrings pls forgive me thank i just comment

python
if avail_stud_time_str == "":
	print("There are no students currently available to study at the same time. These are the students that are working on the same pset: " + avail_stud_str)
else:
	print("These are the students that are working on the same pset at the same time: " + avail_stud_time_str)

my attempts at converting that to JS
if (avail_stud_str == ''){}

didn't end up converting this similar to why i didn't convert the inputs

but as we can't append this new student to students because the inputs are floating around :(
python 
    students.append(Student(name, subject, time, kerberos))
js attempt
    students.push()
*/



