import {FC, JSX} from "react";
import {Link} from "react-router-dom";

export interface IFooterConfig {
    label: string;
    link: string;
    to: string;
}

interface IFooter {
    cfg: IFooterConfig;
}

const Footer: FC<IFooter> = ({ cfg }): JSX.Element => {
    return (
        <footer
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                marginTop: '20px'
            }}
        >
            {cfg.label}
            <span>
                <Link to={cfg.to}>
                    {cfg.link}
                </Link>
            </span>
        </footer>
    )
}

export default Footer