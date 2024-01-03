interface CopyButtonProps {
    urlname: string;
}

const CopyButton = ({ urlname }: CopyButtonProps) => {
    const copied = () => {
        navigator.clipboard.writeText(fullurl)
        alert("Link copied")
    }
    const url = process.env.REACT_APP_URL ?? ''
    const fullurl = url + urlname
    return (
        <>
            <h2 className="text-center text-[#aaa] sm:text-sm my-5">Here is your shortened URL. Click to copy.</h2>
            <p className="text-center  text-[#f5dddd] text-xl sm:text-sm max-w-[25rem]
                    sm:max-w-[18rem] m-auto hover:cursor-pointer"
                onClick={() => { copied() }}>
                {fullurl}
            </p>
        </>
    );
}

export default CopyButton;