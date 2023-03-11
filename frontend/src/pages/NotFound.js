
import { TbFaceIdError } from 'react-icons/tb';

function NotFound() {
    return (
        <>
            <h2 className="pageTitle">404</h2>
            <TbFaceIdError size="100" className="pageTitle" />
            <p className="pageTitle">Hmm, there doesn't seem to be anything here.</p>
        </>
    );
}

export default NotFound;