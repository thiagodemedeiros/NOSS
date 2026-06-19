import { useParams } from "react-router-dom";
import { type PartnerOrganization } from "../data/PartnerOrganizations";
import "./PagePartnerOrganizations.css";
import { SectionPartnerOrganizations } from "../section/SectionPartnerOrganizations";
import partnerOrganizationsConfig from "../../../../configs/partnerOrganizationsConfig.yaml?raw";
import { parse } from "yaml";

const allPartnerOrganizations = 
    parse(partnerOrganizationsConfig) as { partnerOrganizations: PartnerOrganization[] };
const partners = allPartnerOrganizations.partnerOrganizations;

export const PagePartnerOrganizations = () => {
    const { id } = useParams<{id : string}>();
    const partner = partners.find((p : PartnerOrganization) => (
        p.id === id
    ))

    if (!partner)
        return (
            <section className="PagePartnerOrganizations">
                <div className="PagePartnerOrganizationsContainer">
                    <h3>Parceiro não encontrado</h3>
                </div>
                <SectionPartnerOrganizations id={id}/>
            </section>
        )

    return(
        <section className="PagePartnerOrganizations">
            <div className="PagePartnerOrganizationsContainer">
                <h3>{partner?.name}</h3>
                <img src={partner?.image} alt="Partner Organization" />
                <h4>Localização: {partner?.localization}</h4>
                <p>{partner?.description}</p>
                <a href={partner?.link} target="_blank" rel="noopener noreferrer">
                    Clique, e acesse a pagina oficial do nosso parceiro!
                </a>
            </div>
            <SectionPartnerOrganizations id={id}/>
        </section>
    )
};