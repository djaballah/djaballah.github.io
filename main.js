let createProjectHeaderDiv = function(title, demoLink, githubLink) {
    let projectHeaderDiv = document.createElement("div")
    projectHeaderDiv.setAttribute('class', "project-header")

    let headerTitle = document.createElement('h1')
    headerTitle.innerText = title

    let headerLinks = document.createElement('div')

    let demoLinkTag = document.createElement('a')
    demoLinkTag.innerText = "Demo"
    demoLinkTag.setAttribute("href", demoLink)
    let githubLinkTag = document.createElement('a')
    githubLinkTag.innerText = "Github"
    githubLinkTag.setAttribute("href", githubLink)
    let seperator = document.createElement('span')
    seperator.innerText = '/'
    seperator.setAttribute('class', "separator")
    headerLinks.append(demoLinkTag, seperator, githubLinkTag)

    projectHeaderDiv.append(headerTitle, headerLinks)
    return projectHeaderDiv
}

let createProjectDescriptionDiv = function(projectData) {
    let projectDescriptionDiv = document.createElement('div');
    projectDescriptionDiv.setAttribute('class', 'project-description');
    let projectHeaderDiv = createProjectHeaderDiv(
        projectData['title'],
        projectData['demoLink'],
        projectData['github']
    )

    let projectText = document.createElement('p');
    projectText.innerText = projectData["desc"]

    projectDescriptionDiv.append(projectHeaderDiv, projectText)

    return projectDescriptionDiv
}


function addProject(projectsDiv, projectData) {

    let projectDiv = document.createElement('div');
    projectDiv.setAttribute("class", "project-container");

    let projectThumbnailDiv = document.createElement('div');
    projectThumbnailDiv.setAttribute('class', 'project-thumbnail')

    let projectImg = document.createElement('img')
    projectImg.setAttribute('src', projectData["thumbnailPath"])
    projectThumbnailDiv.appendChild(projectImg)

    let projectDescriptionDiv = createProjectDescriptionDiv(projectData);

    let projectDescriptionFooter = document.createElement("p")
    projectDescriptionFooter.setAttribute('class', "small-p");
    projectDescriptionFooter.innerText = 'Technologies: '
    for (technology of projectData['technologies']) {
        let span = document.createElement('span')
        span.setAttribute('class', 'tags')
        span.innerText = technology.toUpperCase()
        projectDescriptionFooter.appendChild(span)
    }
    projectDescriptionDiv.appendChild(projectDescriptionFooter)

    projectDiv.append(projectThumbnailDiv, projectDescriptionDiv);

    projectsDiv.appendChild(projectDiv);
}

let projects = [
    {
        "title": "Landing Page",
        "thumbnailPath": "assets/product-landing.png",
        "desc": "A product landing web page which is a project from the freecodecamp Resposive Web Design Certification.",
        "demoLink": "https://djaballah.github.io/product-landing-page/",
        "github": "https://github.com/djaballah/product-landing-page",
        "technologies": ['html', 'css'],
        "tag": "freecodecamp"
    }
]


const projectsDiv = document.getElementById('projects')
for (projectData of projects) {
    addProject(projectsDiv, projectData);
}



