import { deleteCompanyById, getAllTrustedCompany } from "@/lib/services";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { UserIcon } from "lucide-react";
// import { useRouter } from "next/router";

const AdminAllTrustedCompany = async () => {
  const fetchTrustedCompany = await getAllTrustedCompany();

  const handleDeleteCompany = async (id: string) => {
    try {
      await deleteCompanyById(id);
      // refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="mt-14 pb-8 text-4xl font-bold">
        Here is All Trusted Company{" "}
      </h1>
      <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">
        {fetchTrustedCompany.map((item, index) => (
          <div key={index}>
            <Card shadow="sm">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="h-[100px] w-full object-cover"
                  src={item.imageUrl}
                />
              </CardBody>
            </Card>
            <div className="mt-6">
              <Button
                color="danger"
                variant="bordered"
                startContent={<UserIcon />}
              >
                Delete Company
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAllTrustedCompany;
