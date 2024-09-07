import AccountNameForm from "@/features/user/components/account-name-form";
import ChangeEmail from "@/features/user/components/change-email";
import ChangePassword from "@/features/user/components/change-password";
import { Divider } from "@mantine/core";
import AccountAvatar from "@/features/user/components/account-avatar";
import SettingsTitle from "@/components/settings/settings-title.tsx";
import { useTranslation } from "react-i18next";

export default function AccountSettings() {
  const { t } = useTranslation();

  return (
    <>
      <SettingsTitle title={t("My Profile")} />

      <AccountAvatar />

      <AccountNameForm />

      <Divider my="lg" />

      <ChangeEmail />

      <Divider my="lg" />

      <ChangePassword />
    </>
  );
}
