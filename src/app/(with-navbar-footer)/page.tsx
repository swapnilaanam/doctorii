import CustomerReviews from "@/components/CustomerReviews/CustomerReviews";
import EmergencyDoctors from "@/components/EmergencyDoctors/EmergencyDoctors";
import FeaturedDoctors from "@/components/FeaturedDoctors/FeaturedDoctors";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Membership from "@/components/Membership/Membership";
import MostBookedDiagnosis from "@/components/MostBookedDiagnosis/MostBookedDiagnosis";
import NearByDoctors from "@/components/NearByDoctors/NearByDoctors";
import OurServices from "@/components/OurServices/OurServices";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <EmergencyDoctors />
      <OurServices />
      <NearByDoctors />
      <FeaturedDoctors />
      <MostBookedDiagnosis />
      <Membership />
      <CustomerReviews />
    </div>
  )
}
