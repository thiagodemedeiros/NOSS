import { type PartnerOrganization } from "../data/PartnerOrganizations";
import { Link } from "react-router-dom";
import "./SectionPartnerOrganizations.css";
import partnerOrganizationsConfig from "../../../../configs/partnerOrganizationsConfig.yaml?raw";
import { parse } from "yaml";

const allPartnerOrganizations = 
    parse(partnerOrganizationsConfig) as { partnerOrganizations: PartnerOrganization[] };
const partners = allPartnerOrganizations.partnerOrganizations;

interface SectionPartnerOrganizationsProps {
    id?: string;
}

export const SectionPartnerOrganizations =
    (
        { id }: SectionPartnerOrganizationsProps
    ) => {

    return (
        <section className="SectionPartnerOrganizations">
            <div className="SectionPartnerOrganizationsContainer">
                {
                    id
                    ?
                    <h3>Conheça outras das nossas organização parceira</h3>
                    :
                    <h3>Conheça nossas organizações parceiras</h3>
                }
                <div className="SectionPartnerOrganizationsContainerLogos">
                {
                    id
                    ?
                    partners
                    .filter((partner: PartnerOrganization) => partner.id !== id)
                    .map((partner: PartnerOrganization) => (
                        <PartnerOrganizationsLink key={partner.id} id={partner.id} image={partner.image} />
                    ))
                    :
                    partners.map((partner: PartnerOrganization) => (
                        <PartnerOrganizationsLink key={partner.id} id={partner.id} image={partner.image} />
                    ))
                }
                </div>
            </div>
        </section>
    );
};

const PartnerOrganizationsLink = ({id , image} : any) => {
    return (
        <Link to={`/partner-organizations/${id}`} className="PartnerOrganizationsLink">
            <img src={image} alt={`Logo da Organização Parceira ${id}`} />
        </Link>
    );
};