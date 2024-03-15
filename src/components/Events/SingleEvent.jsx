import React from 'react';

function SingleEvent() {
  return (
    <>
      <div className=" bg-slate-100">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">Event Details</h2>
            <p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t-2 border-green-900 text-green-800 pt-4">
                <dt className="font-medium text-orange-600">Name</dt>
                <dd className="mt-2 text-sm text-gray-500">Name from DB</dd>
              </div>
              <div className="border-t-2 border-green-900 text-green-800 pt-4">
                <dt className="font-medium text-orange-600">Location</dt>
                <dd className="mt-2 text-sm text-gray-500">Location from DB</dd>
              </div>
              <div className="border-t-2 border-green-900 text-green-800 pt-4">
                <dt className="font-medium text-orange-600">Date</dt>
                <dd className="mt-2 text-sm text-gray-500">Date From DB</dd>
              </div>
              <div className="border-t-2 border-green-900 text-green-800 pt-4">
                <dt className="font-medium text-orange-600">Organization</dt>
                <dd className="mt-2 text-sm text-gray-500">Organization Name from DB</dd>
              </div>
              <div className="border-t-2 border-green-900 text-green-800 pt-4">
                <dt className="font-medium  text-orange-600">Start Time</dt>
                <dd className="mt-2 text-sm text-gray-500">Start Time from DB</dd>
              </div>
              <div className="border-t-2 border-green-900 text-green-800 pt-4">
                <dt className="font-medium text-orange-600">End Time</dt>
                <dd className="mt-2 text-sm text-gray-500">End Time from DB</dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 h-96">
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <p className="text-xl font-medium text-gray-800">Do you want to buy a ticket?</p>
          <button type="button" className="ml-4 px-4 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-green-900 focus:outline-none">Buy Ticket</button>
        </div>
      </div>
    </>
  );
}

export default SingleEvent;
