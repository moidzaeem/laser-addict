import { FC, ReactNode } from 'react';
import { Div } from "../styled-components";
import { Font } from '../theme/typo';

interface WrapperProps {
    children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
    return (
        <Div
            sx={{
                pl: { xs: 2, sm: 3, md: 8 },
                pr: { xs: 2, sm: 3, md: 8 },
                pt: { xs: 1, sm: 2 },
                pb: { xs: 1, sm: 2 },
            }}
        >
            {children}
        </Div>
    );
}

export default Wrapper;




interface ColorLayer {
    text: string
}

export const RainbowColor: FC<ColorLayer> = ({ text }) => {
    return (
        <Div
            sx={{
                width: '100%',
                textAlign: 'center',
                p: 2.3,
                background: 'rgb(34,163,131)',
                backgroundImage: 'linear-gradient(90deg, rgba(34,163,131,1) 0%, rgba(102,102,102,1) 100%)'
            }}
        >
            <Font sx={{ color: 'white' }}>{text}</Font>
        </Div>
    );
}

