export class TestData {

    introduction_chapter_title = "Welcome to the Documentation"
    introduction_paragraph_content = "Here you can get all the information you need about the product"
    didcomm_chapter_title = "DIDComm Messaging"
    didcomm_sub_chapter_title = "Implementations#"
    didcomm_paragrahp_1 = "DIDComm Messaging is a powerful way for people, institutions, and IoT things to interact via machine-readable messages, using features of decentralized identifiers (DIDs) as the basis of security and privacy. It works over any transport: HTTP, BlueTooth, SMTP, raw sockets, and sneakernet, for example."
    didcomm_paragrahp_2 = "Here are links to some implementations of the DIDComm v2 spec that you may find useful. This WG is not endorsing these implementations in any special way -- simply listing ones we know about. They might be at different levels of maturity. If you want to add something to this list, please raise a PR against the repo to let us know."
    ssi_chapter_title = "Self-sovereign identity (SSI)"
    ssi_paragraph_1 = "SSI is an approach to digital identity that gives individuals control of their digital identities."
    ssi_paragraph_2 = "SSI addresses the difficulty of establishing trust in an interaction. In order to be trusted, one party in an interaction will present credentials to the other parties, and those relying parties can verify that the credentials came from an issuer that they trust. In this way, the verifier's trust in the issuer is transferred to the credential holder. This basic structure of SSI with three participants is sometimes called \"the trust triangle\"."
    ssi_paragraph_3 = "It is generally recognized that for an identity system to be self-sovereign, users control the verifiable credentials that they hold and their consent is required to use those credentials. This reduces the unintended sharing of users' personal data. This is contrasted with the centralized identity paradigm where identity is provided by some outside entity."
    ssi_paragraph_4 = "In an SSI system, holders generate and control unique identifiers called decentralized identifiers. Most SSI systems are decentralized, where the credentials are managed using crypto wallets and verified using public-key cryptography anchored on a distributed ledger. The credentials may contain data from an issuer's database, a social media account, a history of transactions on an e-commerce site, or attestation from friends or colleagues."
    ssi_page_chapter_title = "Decentralized Identifiers (DIDs) v1.0"

    getContent(content_id) {
        let content
        switch (content_id) {
            case 'introduction_chapter_title':
                content = this.introduction_chapter_title
                break
            case 'introduction_paragraph_content':
                content = this.introduction_paragraph_content
                break
            case 'didcomm_chapter_title':
                content = this.didcomm_chapter_title
                break
            case 'didcomm_sub_chapter_title':
                content = this.didcomm_sub_chapter_title
                break
            case 'didcomm_paragrahp_1':
                content = this.didcomm_paragrahp_1
                break
            case 'didcomm_paragrahp_2':
                content = this.didcomm_paragrahp_2
                break
            case 'ssi_chapter_title':
                content = this.ssi_chapter_title
                break
            case 'ssi_paragraph_1':
                content = this.ssi_paragraph_1
                break
            case 'ssi_paragraph_2':
                content = this.ssi_paragraph_2
                break
            case 'ssi_paragraph_3':
                content = this.ssi_paragraph_3
                break
            case 'ssi_paragraph_4':
                content = this.ssi_paragraph_4
                break
            case 'ssi_page_chapter_title':
                content = this.ssi_page_chapter_title
                break
        }
        return content
    }

}

export const testData = new TestData()
