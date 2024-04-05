"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Fragment } from "react";

type ConfirmationModalProps = {
  onConfirm(): void;
};

export function ConfirmationModal({
  onConfirm,
}: Readonly<ConfirmationModalProps>) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Fragment>
      <Button onPress={onOpen} fullWidth color="danger" size="lg">
        Delete Portfolio
      </Button>
      <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Confirmation</ModalHeader>
              <ModalBody>Are you sure you want to delete this?</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onConfirm();
                    onClose();
                  }}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
