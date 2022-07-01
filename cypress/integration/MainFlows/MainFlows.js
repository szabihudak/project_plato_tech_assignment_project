import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {documentationPage} from "../../support/PageObjects/DocumentationPage"

import {testData} from "../../support/TestData"


before(function () {
    cy.visit('https://very-important.vercel.app/',)
});

afterEach(function () {
    cy.visit('https://very-important.vercel.app/',)
});

When(`I click on link {}`, (link) => {
    documentationPage.getLink(link)
        .should('be.visible')
        .invoke('attr', 'target', '_self')
        .click({force: true})
})

When(`I click on menu button {}`, (title) => {
    documentationPage.getMenuButton(title)
        .should('be.visible')
        .click()
})

When(`I click on navigation bar button {}`, (title) => {
    documentationPage.getNavigationBarButton(title)
        .should('be.visible')
        .click()
})

When(`I can't see navigation bar button {}`, (title) => {
    documentationPage.getNavigationBarButton(title)
        .should('not.exist')
})

When(`I see navigation bar button {}`, (title) => {
    documentationPage.getNavigationBarButton(title)
        .should('be.visible')
        .should('be.visible', 'true')
})

Then(`I wait {} sec`, (time) => {
    cy.wait(Number(time) * 1000)
})

When(`I search for {} in the text`, (search_string) => {
    documentationPage.getSearchField()
        .click()
        .type('search_string')
})


Then(`I check if new tab was opened with {} url`, (url) => {
    cy.url()
        .should('equal', url)
})

Then(`I check if the content of the {} is {}`, (content_type, content_id) => {
    let content_to_check
    switch (content_type) {
        case 'chapter title':
            content_to_check = documentationPage.getChapterTitle()
            break
        case 'sub chapter title':
            content_to_check = documentationPage.getChapterSubTitle()
            break
        case 'paragraph':
            content_to_check = documentationPage.getParagraphContent(testData.getContent(content_id))
            break
    }
    content_to_check
        .should('be.visible')
        .should('have.text', testData.getContent(content_id))
})





