interface CopyButtonProps {
    urlname: string;
}

const CopyButton = ({ urlname }: CopyButtonProps) => {
    // const api = process.env.API
    const copied = () => {
        navigator.clipboard.writeText(fullurl)
        alert("Link copied")
    }
    const fullurl = 'https://urlshortener-service-vfuq.onrender.com/' + urlname
    return (
        <>
            <h2 className="text-center text-gray-700 my-5">Here is your shortened URL. Click to copy.</h2>
            <p className="text-center  text-blue-500 text-2xl hover:cursor-pointer"
                onClick={() => { copied() }}>
                {fullurl}
            </p>
        </>
    );
}

export default CopyButton;