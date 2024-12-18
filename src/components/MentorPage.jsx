import React from 'react';
import './App.css';

const MentorPage = () => {
  return (
    <div className='w-[1440px] h-[1024px] border border-gray-300 mx-auto bg-gray-100'>
      <div className='w-[1312px] h-[136px] border border-gray-800 border-2 mt-[64px] ml-[64px] flex justify-center items-center bg-white'>
        <h1 className="text-7xl font-poppins">Find your right mentor</h1>
      </div>
      <div className="grid grid-cols-2">
        <div className='w-[656px] h-[760px] ml-[64px] border border-gray-800 border-b-2 border-l-2 border-t-0 border-r-0 bg-white'>
          <div className='border border- 2 w-[541px] h-[666px] mt-[47px] ml-[64px]'>
            <div className='border border- 2 w-[541px] h-[338px]'>
             
              <h2 className="text-2xl font-semibold text-5xl">Learn from experts</h2>
              <h2 className="text-2xl font-semibold text-5xl">Grow your career</h2>
              
              <p className="text-gray-600 mt-6 text-2xl mt-[24px]">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Faucibus in libero risus<br/>semper habitant arcu eget. Et integer.</p>
              
              <button className="bg-gray-800 w-[301px] h-[66px] text-white text-[22px] py-2 px-4 rounded hover:bg-gray-300 mt-[24px] rounded-[40px] shadow-[6px_6px_0px_#000]">Explore our mentors</button>
            </div>

            <div className='grid grid-cols-2 grid-rows-2 gap-4 w-[458px] h-[264px] rounded-[32px] border border-2 border-gray-800 mt-[64px]'>
           
              <div className="p-4 text-center">
                <p className="text-2xl font-bold">34+</p>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur
                adipiscing</p>
              </div>

              <div className="p-4 text-center">
                <p className="text-2xl font-bold">245K</p>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur
                adipiscing</p>
              </div>

              <div className="p-4 text-center">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur
                adipiscing</p>
              </div>

              <div className="p-4 text-center">
                <p className="text-2xl font-bold">4.89</p>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur
                adipiscing</p>
              </div>



            </div>
          </div>
        </div>


        <div className='w-[656px] h-[760px]  border border-gray-800 border-2 border-t-0 bg-white'>
          <div className='grid grid-cols-2 w-[656px] h-[760px]'>
            <div className='grid grid-rows-2 w-[326px] h-[760px] gap-2'>
              <div className="w-[248px] h-[240px] border border-2">
              </div>
              <div className='w-[326px] h-[499px] bg-sky-300'>
              <img src='https://s3-alpha-sig.figma.com/img/169c/6232/64cbfb3ee839521cf87cdaeac2cc52ec?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJM3XVwaMPBRhLRUlRr~zjsRp6R~N5lcaGqMc6bco-frC9nXMRYoND~LM~DmgL3E1Yj5WT2CGKyXkq1i7g5zEUb7ZwUtpCaRqguw2Au6l37wiY9CgEYLMFyPfemUUaRSpsVjRJMhk2pXHGIIqSI9Atdkbn~8aAkrQmRksEm~sBrJsKIO~yKM~zgNhBTDkCe00bia-7YUBYXSvncZWO1oDXcHPsHzcAP3d4V6xqEW-EtQyd1uU80C~Hi~qMqvXvOc-XalIkTcJbmue6TdH85uQopWS7MaYjQVGiClntfYH-eT2wZb5Ch25S~KqMOIUdR6to5XWNm4Br71p~jkh1uGgA__' alt='photo4 'className='object-cover w-full h-full'/>
              </div>

            </div>
          
            <div className='grid grid-rows-3 w-[306px] h-[760px] gap-5'>
              <div className='bg-pink-200 w-[306px] h-[237px]'>
                <img src='https://s3-alpha-sig.figma.com/img/64ed/8b4e/fa045b3b5c64677785bbe4a961756177?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvqYOFReai-CN4G6XAHQlhPpLxLo9N~8BFBh0l1zRSbGzFqZDhN2uoX9~g6Hq6fklcahQS1UAM8mB8XVFHm71o2dBpf4w7TobKS07GtrUfYhRT1TU7iSIjq1qydRfIGdmoorYsXBXs4F8B9zWBNXmCDjAN6buAi672h8QQIMh~FqLxCbxEbWys5eqCt6mznAZKo6ZFycx~qHaXFJXFfT2V5rXdauAdNrgEo~DRbFGL5GiU9gbI7tw2fgc1bJ6A6ZWYRPol0AuFcTOD9AdWHSreUwo2agGAj8Pyy5AjPoqqZdw356eQBTV1nnMjViIgbWbYZEUVQwMWkkabpCKzj0nw__' alt='photo1 'className='object-cover w-full h-full'/>
              </div>
              <div className='bg-indigo-600 w-[306px] h-[238px]'>
                <img src='https://s3-alpha-sig.figma.com/img/24e9/50ee/be2e40856391b839a9a5ce43a0f426cf?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cWuiN8skpNGtXCbA6j94luyQeWEZLS6D6hw9x386iP2-pdw5tp5CXbSoW3TT3WzrE3RkBThjfb9gOTVgntEu9idfcX6l5dyl5SsZ13cqc4FbSc3lPFWVnKQfxF8XR3BrkzWebsXFEmP9aYg~zw-GPPsJBdIe09CVHXV~9gc41SLwIJh1zUlp4rr7noyBJItt1~fQn9NJjWrMt9AogSZXLBMbAgT8RMgBWtjoVflQqevMDMogZ3iP3ep7QDc1x6nqCMaS61OcvBXaWapByVyavQr~oK0b08WnWynTGeZy1vENf-kPByalrmV1uIE-2kVZ88LdZ5pjTsGHf6MVNMOFsQ__'alt='photo2' className='object-cover w-full h-full'/>
              </div>
              <div className='bg-indigo-600 w-[306px] h-[237px]'>
                <img src='https://s3-alpha-sig.figma.com/img/5e5b/61b9/b7d60a4c48b562aaa02f61ad8b9af621?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iVhfLO1M2Ziun1l-T8pC3Q~kgUvhzqupa2SO-0PhF3YPUoGvlvm2DRCjPFdEsY7xAVypuYNTuvfwkVpkdHkbK9XBKPuXYNQkQWW4oVdE2980VwbOEuQZGuFaL4z~iv3XzP9rijUQxtlTNThaD9SpQVUgZRmeBxLSx6bPXlt46h5acqJFNtU0eTkGfkUJyjqmpknbP-xz~eyyfR-V~pwjD1GSZkvyAXi3QW4KhWWLTv3DkfB2oxFVn0OkLfVwqIVHZjMreLK8aFHdG0dcIZADy317YK568vvPrD86sZBhFlnUzg-11Nnv6YpHKC3uy7GrFN4gf3ye8rVO536yta3hbw__'alt='photo3' className='object-cover w-full h-full'/>
              </div>
            </div>

          </div>
        </div>



      </div>
    </div>


  );
};

export default MentorPage;
