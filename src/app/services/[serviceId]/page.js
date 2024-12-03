import React from 'react';
import { getService } from '@/data/api/Api';
import ImageDescriptionBlock from '@/components/imageDescriptionBlock/ImageDescriptionBlock';
import HeroBanner from '@/components/herobanner/HeroBanner';

const ServicePage = async ({ params }) => {
  const { serviceId } = params;
  const resp = await getService(serviceId);
  const serviceData = resp[0];

  return (
    <div>
      <HeroBanner customClass="common-hero flex items-end pb-5" title={serviceData?.training?.name} />

      <ImageDescriptionBlock 
        imgUrl={serviceData?.thumbnailImage}
        title={serviceData?.mainTitle} 
        description={serviceData?.description}
        isCourse={true}
      />
    </div>
  );
};

export default ServicePage;
