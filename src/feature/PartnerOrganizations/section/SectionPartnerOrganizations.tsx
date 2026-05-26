import { partnerOrganizations , type PartnerOrganization } from "../data/PartnerOrganizations";
import { Link } from "react-router-dom";
import "./SectionPartnerOrganizations.css";

export const SectionPartnerOrganizations = () => {
    return (
        <section className="SectionPartnerOrganizations">
            <div className="SectionPartnerOrganizationsContainer">
                <h3>Conheça nossas organizações parceiras</h3>
                <div className="SectionPartnerOrganizationsContainerLogos">
                    {partnerOrganizations.map((partner: PartnerOrganization) => (
                        <PartnerOrganizationsLink key={partner.id} id={partner.id} image={partner.image} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PartnerOrganizationsLink = ({id , image} : any) => {
    return (
        <Link to={`/partner-organizations/${id}`} className="PartnerOrganizationsLink">
            <img key={id} src={image} alt={`Logo da Organização Parceira ${id}`} />
        </Link>
    );
};