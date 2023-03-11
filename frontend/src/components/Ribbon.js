import React from 'react';
import { VscGithubInverted, VscTwitter } from 'react-icons/vsc';
import { RxLinkedinLogo } from 'react-icons/rx';

function Ribbon() {
    return (
        <>
            <div className="ribbonContainer">
                <a href="https://www.linkedin.com/in/kevinkuei" target="_blank" rel="noreferrer">
                    <RxLinkedinLogo className="ribbonIcons" size="30" />
                </a>
                <a href="https://github.com/kckuei" target="_blank" rel="noreferrer">
                    <VscGithubInverted className="ribbonIcons" size="30" />
                </a>
                <a href="https://twitter.com/kckuei/with_replies" target="_blank" rel="noreferrer">
                    <VscTwitter className="ribbonIcons" size="30" />
                </a>
            </div>
        </>)
}

export default Ribbon;