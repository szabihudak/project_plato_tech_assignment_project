export class DocumentationPage {

    getChapterSubTitle(title) {
        return cy.get('h3')
    }

    getChapterTitle(title) {
        return cy.get('h1')
    }

    getLink(link) {
        return cy.get('a:contains(' + link + ')')
    }

    getMenuButton(title) {
       return cy.get('div[class="hidden md:block"] ul li a:contains(' + title + ')')
    }

    getParagraphContent(title) {
        return cy.get('p:contains(' + title + ')')
    }

    getSearchField(title) {
        return cy.get('div[class="flex-1"] input[type="search"]')
    }

    getSideBarButton(title) {
        return cy.get('div[class*="flex-row"] a:contains(' + title + ')')
    }

}

export const documentationPage = new DocumentationPage()