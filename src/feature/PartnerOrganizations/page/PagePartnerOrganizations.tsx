import { useParams } from "react-router-dom";
import { partnerOrganizations , type PartnerOrganization } from "../data/PartnerOrganizations";
import "./PagePartnerOrganizations.css";

export const PagePartnerOrganizations = () => {
    const { id } = useParams<{id : string}>();
    const partner = partnerOrganizations.find((p : PartnerOrganization) => (
        p.id === id
    ))

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
        </section>
    )
};