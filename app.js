//Array Assignment - Ramzan Calendar
var englishDates = ["14th April", "15th April", "16th April", "17th April", "18th April", "19th April", "20th April", "21st April", "22nd April", "23rd April", "24th April", "25th April", "26th April", "27th April", "28th April", "29th April", "30th April", "1st May", "2nd May", "3rd May", "4th May", "5th May", "6th May", "7th May", "8th May", "9th May", "10th May", "11th May", "12th May", "13th May"]
var islamicDates = ["1st Ramzan", "2nd Ramzan", "3rd Ramzan", "4th Ramzan", "5th Ramzan", "6th Ramzan", "7th Ramzan", "8th Ramzan", "9th Ramzan", "10th Ramzan", "11th Ramzan", "12th Ramzan", "13th Ramzan", "14th Ramzan", "15th Ramzan", "16th Ramzan", "17th Ramzan", "18th Ramzan", "19th Ramzan", "20th Ramzan", "21st Ramzan", "22nd Ramzan", "23rd Ramzan", "24th Ramzan", "25th Ramzan","26th Ramzan", "27th Ramzan", "28th Ramzan", "29th Ramzan", "30th Ramzan"]
var sehariTimes = ["04:52", "04:51", "04:50", "04:49", "04:48", "04:47", "04:45", "04:44", "04:43", "04:42", "04:41", "04:40", "04:39", "04:38", "04:37", "04:36", "04:35", "04:35", "04:34", "04:33", "04:32", "04:31", "04:30", "04:29", "04:28", "04:28", "04:27", "04:26", "04:25", "04:25",]
var iftarTimes = ["18:54", "18:55", "18:55", "18:56", "18:56", "18:57", "18:57", "18:58", "18:58", "18:59", "18:59", "18:59", "19:00", "19:00", "19:01", "19:01", "19:02", "19:02", "19:03", "19:03", "19:04", "19:04", "19:05", "19:05", "19:06", "19:06", "19:07", "19:07", "19:08", "19:08", ]

var userDate = prompt("Enter a date to see its Sehar and Iftaar time: (e.g. 15)");
while ((userDate < 1 || userDate > 30) || (userDate === null || userDate === "")) {
	if (userDate === null || userDate === "") {
	   alert("Not Allowed!");
	   userDate = prompt("Enter a date to see its Sehar and Iftaar time: (e.g. 15)");
       }
       else if (userDate < 1 || userDate > 30) {
	   alert("Please enter a valid date!");
	   userDate = prompt("Enter a date to see its Sehar and Iftaar time: (e.g. 15)");
       }
}
userDate = --userDate;
document.write("<table>")
document.write("<tr>")
document.write("<th>")
document.write("<center>")
document.write("Islamic Date")
document.write("</center>")
document.write("</th>")
document.write("<th>")
document.write("<center>")
document.write("English Date")
document.write("</center>")
document.write("</th>")
document.write("<th>")
document.write("<center>")
document.write("Sehar Time")
document.write("</center>")
document.write("</th>")
document.write("<th>")
document.write("<center>")
document.write("Iftar Time")
document.write("</center>")
document.write("</th>")
document.write("</tr>")
document.write("<tr>")
document.write("<td>")
document.write("<center>")
document.write(islamicDates[userDate])
document.write("</center>")
document.write("</td>")
document.write("<td>")
document.write("<center>")
document.write(englishDates[userDate])
document.write("</center>")
document.write("</td>")
document.write("<td>")
document.write("<center>")
document.write(sehariTimes[userDate])
document.write("</center>")
document.write("</td>")
document.write("<td>")
document.write("<center>")
document.write(iftarTimes[userDate])
document.write("</center>")
document.write("</td>")
document.write("</tr>")
document.write("</table>")
