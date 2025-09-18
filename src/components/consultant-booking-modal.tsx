"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { CalendarFoldIcon } from "lucide-react";
import { ConsultantBookingForm } from "./consultant-booking-form";

export function ConsultantBookingModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        // fullWidth
        color="primary"
        size="lg"
        // className="gradient-btn-wide h-10 px-4 text-base font-semibold lg:h-14 lg:px-6 lg:text-xl"
        onPress={onOpen}
        startContent={<CalendarFoldIcon />}
      >
        <span>Book Free Consultation</span>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
        size="5xl"
        classNames={{
          base: "bg-background/90 border border-foreground/10 backdrop-blur-md md:p-4 backdrop-saturate-150",
          body: "px-2 lg:px-4",
        }}
      >
        <ModalContent>
          <ModalHeader className="text-2xl font-semibold">
            Book Free Consultation
          </ModalHeader>
          <ModalBody>
            <ConsultantBookingForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
