import emoji from 'react-easy-emoji';
export const greeting = {
	username: 'Han Kihwan',
	title: 'Hello I\'m Han Kihwan',
	subTitle: emoji("❤"),
	role: "Reversing , Development",
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
	subTitle: "Possible language",
	describeSkills: [	
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-contao", text: "C" },
		{fontAwesome: "fas fa-plus", text: "C++"},
		{fontAwesome: "fas fa-bug", text: "Assembley"},
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
			title: "Starcraft vulnerability Analysis",
			desc: "Starcraft vulnerability Analysis https://www.youtube.com/channel/UCcwBIWCTKLNSj9gpQTztUTQ",
			url: "https://www.youtube.com/channel/UCcwBIWCTKLNSj9gpQTztUTQ"
		},
		{
			title: "Aero Desktop",
			desc: "Aero Desktop ? In wallpapers video and music can be played on the desktop.",
			url: "https://www.youtube.com/watch?v=8BxW556GL-I"
		},
		{
			title: "Loling Score",
			desc: "Loling Score ? Automatic analysis of total before game start",
			url: "https://youtu.be/LNHVqNUGZJs"
		},
		{
			title: "LOL voice auto pather",
			desc: "North American voice, Korean voice patch, UI skin automatic application program",
			url: "https://nedalove.tistory.com/entry/LoL-%EB%B6%81%EB%AF%B8%EC%9D%8C%EC%84%B1-%ED%95%9C%EA%B5%AD%EC%9D%8C%EC%84%B1-%ED%8C%A8%EC%B9%98-UI-%EC%8A%A4%ED%82%A8-%EC%9E%90%EB%8F%99%EC%A0%81%EC%9A%A9-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8"
		},
		{
			title: "Sudden Attack Skin Auto Patch",
			desc: "Sudden Attack Skin Auto Patch",
			url: ""
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