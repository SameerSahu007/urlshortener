import { useState, useEffect } from 'react';

interface UserLink {
    encodedString: string;
    url: string;
    visitCount: number;
    lastVisit?: string;
}

const MyLinks = () => {
    const [userlinks, setUserLinks] = useState<UserLink[]>([]);
    useEffect(() => {
        const token = localStorage.getItem('authtoken');
        fetch('https://urlshortener-service-vfuq.onrender.com/mylinks', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setUserLinks(data)
            })
            .catch(error => console.error('Error:', error));
    }, [])
    return (<>

        {!userlinks.length ? <h2 className='text-center my-4'>There are no links created yet or you're not logged in right now.</h2> : <h2 className='text-center my-4'>Here are your links: </h2>}

        {/* <table className="table-fixed">
            <thead className="bg-black">
                <tr className="border-b-2  border-[#6B7280]">
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-[#6B7280]">
                        Encoded String
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-[#6B7280]">
                        URL
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-[#6B7280]">
                        Clicks
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border border-[#6B7280]">
                        Last Visit
                    </th>
                </tr>
            </thead>
            <tbody className="bg-blac ">
                {userlinks.length > 0 && userlinks.map((object, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 border border-[#6B7280] overflow-hidden text-ellipsis break-words">
                            <div className="text-sm text-[#6B7280] ">{'https://urlshortener-service-vfuq.onrender.com/' + object.encodedString}</div>
                        </td>
                        <td className="px-6 py-4 border border-[#6B7280] overflow-hidden text-ellipsis break-words">
                            <div className="text-sm text-[#6B7280] ">{object.url}</div>
                        </td>
                        <td className="px-6 py-4 border border-[#6B7280] overflow-hidden text-ellipsis break-words">
                            <div className="text-sm text-[#6B7280]  ">{object.visitCount}</div>
                        </td>
                        <td className="px-6 py-4 border border-[#6B7280] overflow-hidden text-ellipsis break-words">
                            <div className="text-sm text-[#6B7280] "> {
                                object.lastVisit && new Date(object.lastVisit).toLocaleString()}</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table> */}

<div className="flex flex-col w-5/6 mx-auto sm:w-full">
  <div className="flex bg-black text-gray-500 border-b-2 border-[#6B7280]">
    <div className="flex-1 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider border border-[#6B7280]">
      Encoded String
    </div>
    <div className="flex-1 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider border border-[#6B7280]">
      URL
    </div>
    <div className="flex-1 px-1 py-3 text-left text-sm font-medium uppercase tracking-wider border border-[#6B7280]">
      Clicks
    </div>
    <div className="flex-1 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider border border-[#6B7280]">
      Last Visit
    </div>
  </div>
  <div className="bg-black">
    {userlinks.length > 0 &&
      userlinks.map((object, index) => (
        <div key={index} className="flex text-[#6B7280] border border-[#6B7280]">
          <div className="flex-1 px-6 py-4 overflow-hidden text-ellipsis break-words border-r-2 border-[#6B7280]">
            <div className="text-sm">
              {'https://urlshortener-service-vfuq.onrender.com/' +
                object.encodedString}
            </div>
          </div>
          <div className="flex-1 px-6 py-4 overflow-hidden text-ellipsis break-words border-r-2 border-[#6B7280]">
            <div className="text-sm">{object.url}</div>
          </div>
          <div className="flex-1 px-1 py-4 overflow-hidden text-ellipsis break-words border-r-2 border-[#6B7280]">
            <div className="text-sm text-center">{object.visitCount}</div>
          </div>
          <div className="flex-1 px-6 py-4 overflow-hidden text-ellipsis break-words border-r-2 border-[#6B7280]">
            <div className="text-sm">
              {object.lastVisit &&
                new Date(object.lastVisit).toLocaleString()}
            </div>
          </div>
        </div>
      ))}
  </div>
</div>


    </>);
}

export default MyLinks;