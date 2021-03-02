interface IProps {
    response: string;

}
const DisplayResponse = ({response}: IProps) => {
    
    return (
        <div>
            <p>
                {response}
            </p>
        </div>
    )
}

export default DisplayResponse