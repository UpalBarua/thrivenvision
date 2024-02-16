import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { UserIcon } from "lucide-react";
import React from "react";

const AdminAllTrustedCompany = () => {
  const list = [
    {
      img: "https://images.unsplash.com/photo-1575395311793-ad870d50fbd1?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1634309490604-1270c0d486e8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      img: "https://images.unsplash.com/photo-1704823822045-a9071033cf68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      img: "https://images.unsplash.com/photo-1679317932396-cae5f94067ed?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1661348027228-e7f05cd5a254?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div>
      <h1 className="mt-14 pb-8 text-4xl font-bold">
        Here is All Trusted Company{" "}
      </h1>
      <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">
        {list.map((item, index) => (
          <div key={index}>
            <Card shadow="sm">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="h-[100px] w-full object-cover"
                  src={item.img}
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
