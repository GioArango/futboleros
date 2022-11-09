
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="126"
                visible={true}
            />
        </div>
    )
}
