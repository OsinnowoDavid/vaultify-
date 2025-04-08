import React from 'react'
const SERVICE=[
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
  {name:'cleaning', price: 100, rating:"4.5",contact:"1234567890", AvailabilityStatus:"Available",ProfileDetails:"View Profile"},
]
function Cleaning() {
  return (
    <>
    <div className='mt-25'>cleaning</div>
    <div>
<table className="table table-bordered table-striped table-hover">

  <tbody className='min-w-full max-w-full divide-y divide-grey-700 m-5 '>
    <tr>
      <th>Service</th>
      <th>Price</th>
      <th>Rating</th>
      <th>Contact</th>
      <th>Availability Status</th>
      <th>Profile Details</th>
    </tr>
    {SERVICE.map((service, index) => (
      <tr key={index}>
        <td>{service.name}</td>
        <td>{service.price}</td>
        <td>{service.rating}</td>
        <td>{service.contact}</td>
        <td>{service.AvailabilityStatus}</td>
        <td>{service.ProfileDetails}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    </>

  
  )
}

export default Cleaning