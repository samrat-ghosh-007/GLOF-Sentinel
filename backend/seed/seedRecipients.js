const Recipient = require('../models/Recipient');

const seedRecipients = async () => {
  try {
   
    await Recipient.deleteMany({});
    console.log('Old recipients removed');

   
    await Recipient.create([
      
      {
        name: 'NDMA Control Room',
        role: 'NDMA',
        level: 'national',
        email: 'controlroom@ndma.gov.in',
        phone: '+911126701728',
      },
      {
        name: 'CWC Flood Control',
        role: 'CWC',
        level: 'national',
        email: 'dirfca-cwc@nic.in',
      },
      {
        name: 'SDMA Uttarakhand',
        role: 'SDMA',
        level: 'state',
        state: 'Uttarakhand',
        email: 'sdma-uttarakhand@nic.in',
      },
      {
        name: 'SDMA Himachal Pradesh',
        role: 'SDMA',
        level: 'state',
        state: 'Himachal Pradesh',
        email: 'sdma-hp@nic.in',
      },
      {
        name: 'SDMA Sikkim',
        role: 'SDMA',
        level: 'state',
        state: 'Sikkim',
        email: 'sdma-sikkim@nic.in',
      },
      {
        name: 'SDMA Jammu & Kashmir',
        role: 'SDMA',
        level: 'state',
        state: 'Jammu & Kashmir',
        email: 'jkdisastermgmt@gmail.com'
      },
      {
        name: 'SDMA Kerala',
        role: 'SDMA',
        level: 'state',
        state: 'Kerala',
        email: 'keralasdma@gmail.com'
      },
      {
        name: 'SDMA Assam',
        role: 'SDMA',
        level: 'state',
        state: 'Assam',
        email: 'assamsdma@gmail.com'
      },
      {
        name: 'SDMA Meghalaya',
        role: 'SDMA',
        level: 'state',
        state: 'Meghalaya',
        email: 'meghalayasdma@gmail.com'
      },
      {
        name: 'SDMA Odisha',
        role: 'SDMA',
        level: 'state',
        state: 'Odisha',
        email: 'osdma@osdma.org'
      },
      {
        name: 'SDMA Andhra Pradesh',
        role: 'SDMA',
        level: 'state',
        state: 'Andhra Pradesh',
        email: 'apsdma@ap.gov.in'
      },
      {
        name: 'SDMA Telangana',
        role: 'SDMA',
        level: 'state',
        state: 'Telangana',
        email: 'tsdma@telangana.gov.in'
      },
      {
        name: 'SDMA Karnataka',
        role: 'SDMA',
        level: 'state',
        state: 'Karnataka',
        email: 'ksdma@gmail.com'
      },
      {
        name: 'SDMA Rajasthan',
        role: 'SDMA',
        level: 'state',
        state: 'Rajasthan',
        email: 'rajasthan-sdma@nic.in'
      },
      {
        name: 'SDMA Sikkim',
        role: 'SDMA',
        level: 'state',
        state: 'Sikkim',
        email: 'sikkimsdma@gmail.com'
      },
      {
        name: 'SDMA Arunachal Pradesh',
        role: 'SDMA',
        level: 'state',
        state: 'Arunachal Pradesh',
        email: 'arunachalsdma@gmail.com'
      },
      {
        name: 'SDMA Nagaland',
        role: 'SDMA',
        level: 'state',
        state: 'Nagaland',
        email: 'nagaland-sdma@nic.in'
      },
      {
        name: 'SDMA Manipur',
        role: 'SDMA',
        level: 'state',
        state: 'Manipur',
        email: 'manipursdma@gmail.com'
      },
      {
        name: 'SDMA Mizoram',
        role: 'SDMA',
        level: 'state',
        state: 'Mizoram',
        email: 'mizoramsdma@gmail.com'
      },
      {
        name: 'SDMA Tripura',
        role: 'SDMA',
        level: 'state',
        state: 'Tripura',
        email: 'tripurasdma@gmail.com'
      },
      {
        name: 'SDMA West Bengal',
        role: 'SDMA',
        level: 'state',
        state: 'West Bengal',
        email: 'wbsdma@gmail.com'
      },
      {
        name: 'SDMA Maharashtra',
        role: 'SDMA',
        level: 'state',
        state: 'Maharashtra',
        email: 'mahasdma@gmail.com'
      },
      {
        name: 'SDMA Gujarat',
        role: 'SDMA',
        level: 'state',
        state: 'Gujarat',
        email: 'gsdma@gujarat.gov.in'
      },
      {
        name: 'SDMA Bihar',
        role: 'SDMA',
        level: 'state',
        state: 'Bihar',
        email: 'biharsdma@gmail.com'
      },
      {
        name: 'SDMA Uttar Pradesh',
        role: 'SDMA',
        level: 'state',
        state: 'Uttar Pradesh',
        email: 'upsdma@gmail.com'
      },
      {
        name: 'SDMA Tamil Nadu',
        role: 'SDMA',
        level: 'state',
        state: 'Tamil Nadu',
        email: 'tndma@gmail.com'
      },
      {
        name: 'SDMA Punjab',
        role: 'SDMA',
        level: 'state',
        state: 'Punjab',
        email: 'punjabsdma@gmail.com'
      },
      {
        name: 'SDMA Haryana',
        role: 'SDMA',
        level: 'state',
        state: 'Haryana',
        email: 'haryanasdma@gmail.com'
      },
      {
        name: 'SDMA Delhi',
        role: 'SDMA',
        level: 'state',
        state: 'Delhi',
        email: 'delhisdma@gmail.com'
      },
      {
        name: 'SDMA Goa',
        role: 'SDMA',
        level: 'state',
        state: 'Goa',
        email: 'goasdma@gmail.com'
      },
      {
        name: 'SDMA Jharkhand',
        role: 'SDMA',
        level: 'state',
        state: 'Jharkhand',
        email: 'jharkhandsdma@gmail.com'
      },
      {
        name: 'SDMA Chhattisgarh',
        role: 'SDMA',
        level: 'state',
        state: 'Chhattisgarh',
        email: 'chhattisgarhsdma@gmail.com'
      }
    ]);

    console.log('Recipients seeded successfully!');
    if (require.main === module) {
        process.exit();
    }
  } catch (err) {
    console.error('Error seeding recipients:', err);
    if (require.main === module) {
        process.exit(1);
    }
  }
};

module.exports=seedRecipients;