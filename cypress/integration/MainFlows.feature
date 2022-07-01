Feature: Main FLows

  Scenario: Check the navigation between the pages
    Given I check if the content of the chapter title is introduction_chapter_title
    # Navidate back to the fisct chapter by pressing on Employee management system documentation link
    When  I click on menu button Didcomm
    Then  I check if the content of the chapter title is didcomm_chapter_title
    When  I click on link Employee management system documentation
    Then  I check if the content of the chapter title is introduction_chapter_title

    # Navidate back to the fisct chapter by pressing on Project Socrates link
    When  I click on menu button Didcomm
    Then  I check if the content of the chapter title is didcomm_chapter_title
    When  I click on link Project Socrates
    Then  I check if the content of the chapter title is introduction_chapter_title

    # Navigate back with side bar button
    When  I click on menu button Didcomm
    Then  I check if the content of the chapter title is didcomm_chapter_title
    Then  I click on side bar button Introduction
    Then  I check if the content of the chapter title is introduction_chapter_title

    # Navigating only with side bar buttons
    When  I see side bar button Didcomm
    And   I can't see side bar button Introduction
    And   I can't see side bar button Self Sovereign Identity
    And   I click on side bar button Didcomm
    Then  I check if the content of the chapter title is didcomm_chapter_title
    When  I can't see side bar button Didcomm
    And   I see side bar button Introduction
    And   I see side bar button Self Sovereign Identity
    And   I click on side bar button Introduction
    Then  I check if the content of the chapter title is introduction_chapter_title
    When  I click on side bar button Didcomm
    Then  I check if the content of the chapter title is didcomm_chapter_title
    When  I click on side bar button Self Sovereign Identity
    Then  I check if the content of the chapter title is ssi_chapter_title
    And   I see side bar button Didcomm
    When  I click on side bar button Didcomm
    Then  I check if the content of the chapter title is didcomm_chapter_title


  Scenario: Content Check - Check the content of each document page / links in the text
    Given I check if the content of the chapter title is introduction_chapter_title
    And   I check if the content of the paragraph is introduction_paragraph_content
    When  I click on menu button Didcomm
    Then  I check if the content of the chapter title is didcomm_chapter_title
    And   I check if the content of the paragraph is didcomm_paragrahp_1
    And   I check if the content of the sub chapter title is didcomm_sub_chapter_title
    And   I check if the content of the paragraph is didcomm_paragrahp_2
    When  I click on menu button Self Sovereign Identity
    Then  I check if the content of the chapter title is ssi_chapter_title
    And   I check if the content of the paragraph is ssi_paragraph_1
    And   I check if the content of the paragraph is ssi_paragraph_2
    And   I check if the content of the paragraph is ssi_paragraph_3
    And   I check if the content of the paragraph is ssi_paragraph_4
    When  I click on menu button Didcomm
    Then  I click on link decentralized identifiers
    And   I check if new tab was opened with https://www.w3.org/TR/did-core/ url
    And   I check if the content of the chapter title is ssi_page_chapter_title


  Scenario: Editor functionalities - Search field and Edit Page function
    Given I check if the content of the chapter title is introduction_chapter_title
    When  I search for Welcome in the text
    # How this sould be working, this seems to be not working properly currently

    When I click on link Edit this page
    # No information about the exact funcionality, but we should see the content we want to edit so let's check that
    Then I check if the content of the chapter title is introduction_chapter_title


    



