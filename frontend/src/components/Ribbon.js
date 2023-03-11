import React from 'react';
import { VscGithubInverted, VscTwitter } from 'react-icons/vsc';
import { RxLinkedinLogo } from 'react-icons/rx';

function Ribbon() {
    return (
        <>
            <div className="ribbonContainer">
                <a href="https://www.linkedin.com/in/kevinkuei" target="_blank">
                    <RxLinkedinLogo className="ribbonIcons" size="25" />
                </a>
                <a href="https://github.com/kckuei" target="_blank">
                    <VscGithubInverted className="ribbonIcons" size="25" />
                </a>
                <a href="https://twitter.com/kckuei/with_replies" target="_blank">
                    <VscTwitter className="ribbonIcons" size="25" />
                </a>
            </div>
        </>)
}

export default Ribbon;