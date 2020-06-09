---
title: პროგრამების შექმნის პროცესი
theme: white
center: true
separator: \n<!-- s -->\n
verticalSeparator: \n<!-- v -->\n
fragments: true
---


პროგრამების შექმნის პროცესი
<!-- n -->
დღეს დავიწყებთ საუბარს იმაზე, თუ როგორ იქმნება ზოგადად პროგრამები

<!-- v -->
## ნაბიჯები და ტრადიციული მიდგომა

<!-- n -->
![waterfall model](https://images.ukdissertations.com/118/0518331.001.jpg)
<!-- v -->

<!-- v -->
## ასეთი მოდელის უარყოფითი მხარეები

<!-- n -->
- No working software is produced until late during the life cycle.
- High amounts of risk and uncertainty.
- Not a good model for complex and object-oriented projects.
- Poor model for long and ongoing projects.
- Not suitable for the projects where requirements are at a moderate to high risk of changing. So, risk and uncertainty is high with this process model.
- It is difficult to measure progress within stages.
- Cannot accommodate changing requirements.
- Adjusting scope during the life cycle can end a project.
- Integration is done as a "big-bang. at the very end, which doesn't allow identifying any technological or business bottleneck or challenges early.

დადებითი მხარეებიც აქვს, [უფრო ვრცლად ორივეზე](https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm).

<!-- v -->

## პროგრესული მოდელები
- კორპორატიული სანამ გახდებოდა
- მცირე გუნდები

<!-- n -->
თუმცა, ეს არ ნიშნავს, რომ მანამდე პროგრესული იდეები არ არსებობდა. ჯერ კიდევ 60-იანებში, როდესაც unix იქმნებოდა, AT&T-ს პროგრამისტები ხშირად იყენებდნენ ღია ოფისს ახალ იდეებზე სასაუბროდ და სპონტანური დეველოპმენტისთვის. ზოგადად, waterfall მიდგომა ეწინააღმდეგება პროგრამისტების და კომპიუტერული მეცნიერების პრაგმატულობას. 

<!-- v -->

### Unix გუნდის მუშაობის პრინციპები

<!-- n -->
> The Unix room was, in some ways, ahead of the curve in providing a large open space with tables where people could work or just hang out. It was often noisy, but it made for very effective communication. Everyone had a private office, but everyone spent some time in the communal space, perhaps just for coffee, or to ask a question about how something worked. And when the system was small and the group was compact, it was also the place to hear about new ideas and new programs. 

[სრული სტატია იუნიქსის ისტორიაზე](https://www.networkworld.com/article/2168942/in-their-own-words--unix-pioneers-remember-the-good-times.html)

<!-- v -->
## Unix Philosophy
უნივერსალური best practice
<!-- n -->
1. Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new "features".
2. Expect the output of every program to become the input to another, as yet unknown, program. Don't clutter output with extraneous information. Avoid stringently columnar or binary input formats. Don't insist on interactive input.
3. Design and build software, even operating systems, to be tried early, ideally within weeks. Don't hesitate to throw away the clumsy parts and rebuild them.
4. Use tools in preference to unskilled help to lighten a programming task, even if you have to detour to build the tools and expect to throw some of them out after you've finished using them.

თუმცა, ეს მიდგომა იყო გამონაკლისი და პრაქტიკაში უკვე განხილული waterfall მოდელი გამოიყენებოდა

<!-- s -->
# Agile

<!-- n -->
ტერმინის პოპულარიზაცია უკავშირდება 2001 წელს [მანიფესტის](https://agilemanifesto.org/iso/ka/manifesto.html) გამოქვეყნებას, მაგრამ მანამდეც იყო უკვე დაწყებული.

<!-- v -->
## მთავარი მიზანი
<!-- n -->

![waterfall და agile შედარება](https://upload.wikimedia.org/wikipedia/commons/c/c7/Waterfall_Vs_Agile_m%2Cmethod.png)
<!-- v -->


<!-- v -->
## ალტერნატიული მოდელი

<!-- n -->
- ჯერ იქმნება ტესტები
- ნებისმიერ დროს უნდა არსებობდეს მუშა პროგრამა
- rubber duck - მეორე ადამიანის მსჯელობაში მარტივად ჩანს ხარვეზი. მეტიც, საკუთარი მსჯელობის ხმამაღლა ლაპარაკშიც კი. (სამსახურში მენტორის გამოცდილება, ამ საგანში კარელის ბაგის მაგალითი) 
![მოდელი](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Extreme_Programming.svg/640px-Extreme_Programming.svg.png?1591684649299). 

<!-- v -->

<!-- v -->
## scrum

<!-- n -->
მენეჯმენტის ერთ-ერთი მიდგომა.

A key principle of Scrum is the dual recognition that customers will change their minds about what they want or need (often called requirements volatility[11]) and that there will be unpredictable challenges—for which a predictive or planned approach is not suited. 

<!-- v -->

## scrum roles
- product owner
- development team
- scrum master
<!-- v -->

## scrum practices
- sprints
- stand ups
- retrospectives

<!-- v -->
## kanban

<!-- n -->
The major differences between Scrum and Kanban is that in Scrum work is divided into sprints that last a fixed amount of time, whereas in Kanban the flow of work is continuous.

<!-- v -->
## სხვა Agile პრაქტიკები
- pair programming
- unit tests, continuous development
- continous integration, reproducible builds

<!-- v -->
## ხშირად დაშვებული შეცდომები Agile გამოყენებისას

პრაქტიკების და მიდგომების ერთობლიობა და არა რაიმე კონკრეტული და მკაცრი პროცესი

<!-- n -->
ბიუროკრატიული და მოუქნელი გარემო თუ არ შეიცვალა, შეიძლება უარესიც კი იყოს, რადგან წინა პროცესი, რამდენადაც ცუდი არ უნდა ყოფილიყო, მუშაობდა და ხალხი შეჩვეული იყო.

<!-- s -->
## გზა კოდიდან აპლიკაციამდე
### TDD

<!-- s -->
## Developer tools

<!-- v -->

### ენა და ეკოსისტემა
- კომპაილერი
- ბიბლიოთეკები

<!-- v -->
### IDE/სამუშაო გარემო
მნიშვნელოვანია, რომ ინდივიდუალური არჩევანი იყოს
<!-- n -->
ზოგჯერ არ არის. მაგალითად მეთოდოლოგიების საგანში.
თქვენ უკვე რამდენიმე გარემო გქონდათ ამ საგანში. ამას რამდენიმე მიზეზი აქვს:
თითოეული ნაწილისთვის ყველაზე შეაფერისი/ფუნქციური გარემო. მაგალითად, კარელის გარემო ყველანაირად არაკომფორტული იყო, მაგრამ tradeoff იქნებოდა: 1) სხვა 3ნის სწავლა, 2) კიდევ ერთი პროგრამის დაყენება. რაც შეეხება html/cssს

<!-- v -->
### git

<!-- v -->
### CI/CD

### დოკერი

<!--  -->
# ენებს, ტექნოლოგიებს შორის არჩევა
## wordpress მაგალითი
მიუხედავად იმისა, რომ php-ზე არის, ხშირად კარგი გადაწყვეტილებაა მისი გამოყენება. (ვების 30% იყენებს)
<!-- n -->
- როგორც პროგრამული ენა, უამრავი ხარვეზი აქვს რომელსაც ვერსიიდან ვერსიამდე ასწორებენ მაგრამ ფუნდამენტურ დიზაინის შეცდომებს ვერა
- ისტორიულად სხვა ენები არ იყვენენ იმდენად საიტებზე კონცენტრირებული
- wordpress შეიქმნა, რის გამოც დე ფაქტო სტანდარტი გახდა
- wordpressზე ბევრი ფლაიგინი, თუთორიალი არსებობს, გარშემო ბევრმა იცის და დაგეხმარებიან
- პროგრამისტების პასუხისმგებლობაა კარგი კოდი, მაგრამ ენაც მნიშნველოვნად განსაზღვრავს რამდენად კარგი კოდის დაწერა არის შესაძლებელი

## Javascript მაგალითი
10 დღეში ჰაკათონზე შექმნილი ენაა რომელიც კიდევ უფრო დაუსრულებელი და ხარვეზიანი იყო
<!-- n -->
- ერთ კონკრეტულ ბრაუზერში გამოიყენეს, რომელიც იყო პოპულარული
- საიტები ამ ბრაუზერზე იყო გათვლილი, ამიტომ იყენებდნენ javascript-ს
- თუ გინდოდა ახალი ბრაუზერის გაკეთება, ძველ საიტებს უნდა ემუშავათ
- ასე ხდებიან დე-ფაქტო სტანდარტები
- ბოლო წლებია 'რაღაცას დაემსგავსა'. ასევე არსებობს ალტერნატიული ენები
### scala, kotlin
JVM ს იყენებს. ანუ იმავე პროგრამის კოდს გადმოსცემს, რასაც java, და ამის გამო გახდა პოპულარული


