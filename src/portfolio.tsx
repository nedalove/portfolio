import emoji from 'react-easy-emoji';
export const greeting = {
	username: 'Han Kihwan',
	title: 'Hello I\'m Han Kihwan',
	subTitle: emoji("❤"),
	role: "Developer",
	resumeLink: "https://drive.google.com/drive/folders/1X-hw12mswF5gMJWzrVMS26kvah0SNh0Z?usp=sharing",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/nedalove',
	linkedin: '',
	email: 'khsoftbusiness@gmail.com',
	facebook: '',
	twitter: "",
	instagram: "",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "Possible Skill",
	describeSkills: [	
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fas fa-bug", text: "IDA" },
		{fontAwesome: "fas fa-bug", text: "x64 DBG" },
		{fontAwesome: "fas fa-bug", text: "win DBG" },
		{fontAwesome: "fab fa-contao", text: "C" },
		{fontAwesome: "fas fa-plus", text: "C++"},
		{fontAwesome: "fas fa-bug", text: "Reversing"},
		{fontAwesome: "fas fa-code", text: "C#"},
		{fontAwesome: "fas fa-file-code", text: "MFC"},		
	],
	view: true
};

export const experience = {
	title: "Experience",
	lists: [
		{
			date: "2018.03~",
			company: "Google",
			role: "Front-End Developer",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "projects",
	lists: [
		{			
			title: "kLauncher",
			desc: "Starcraft hack detector developer site: https://klauncher.kr/",
			url: "https://down.klauncher.kr/"
		},
		{
			title: "악성코드 분석서",
			desc: "악성코드 분석서",
			url: "https://github.com/nedalove/docs"
		},
		{
			title: "Aero Desktop",
			desc: "Aero Desktop ? In wallpapers video and music can be played on the desktop.",
			url: "https://www.youtube.com/watch?v=8BxW556GL-I"
		},			
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "achievement",
	lists: [
		{
			img: require("./assets/ach.png"),
			alt: "정보처리기사",
			title: "정보처리기사 🏆",
			desc: ""
		},	
		{
			img: require("./assets/statistics.png"),
			alt: "사이트 통계",
			title: "k런처 관리자 🏆",
			desc: "하루 사용자 1.5만명 /동접자 1.5천명"
		},		
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "posts",
	lists: [
		{
			title: "klauncher 📰",
			desc: "klauncher admin",
			url: "https://klauncher.kr/"
		},		
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📧",
	subTitle: "khsoftbusiness@gmail.com",
	introduce: emoji("Have a question or want to work together?"),
	view: true
}