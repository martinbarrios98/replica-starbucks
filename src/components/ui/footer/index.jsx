import React from 'react'
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import PreFooter from './prefooter';
import PrincipalFooter from './principal_footer';

export const FooterStyles = styled(motion.footer)`
    background-color: var(--blanco);
    box-shadow: 0 -3px 3px rgb(0 0 0 / 10%);
    padding: 1.5rem 0;
`;

const Footer = () => {
    return (  
        <FooterStyles
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
        >
            <PreFooter />
            <PrincipalFooter />
        </FooterStyles>
    );
}
 
export default Footer;
