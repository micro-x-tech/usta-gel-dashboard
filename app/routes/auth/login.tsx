import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocalStorage } from "usehooks-ts";
import { ProfileType } from "~/__generated__/graphql";
import { Button } from "~/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/atoms/card";
import { Input } from "~/components/atoms/input";
import { Label } from "~/components/atoms/label";
import { Spinner } from "~/components/atoms/spinner";
import storage from "~/utils/storage";
import { STORAGE_KEYS } from "~/utils/storage";
import { useLoginMutation } from "~/data/api";

export default function Login() {
  const navigate = useNavigate();

  const [login, { loading: loginLoading }] = useLoginMutation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await login({
        variables: {
          phoneNumber: `+994${phoneNumber}`,
          password,
          profileType: ProfileType.Admin,
        },
      });

      if (data?.login) {
        storage.setItemAsString(
          STORAGE_KEYS.ACCESS_TOKEN,
          data.login.accessToken
        );
        storage.setItemAsString(
          STORAGE_KEYS.REFRESH_TOKEN,
          data.login.refreshToken
        );

        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      alert("Invalid phone number or password");
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-200">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl text-center">Usta Gel</h1>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center gap-2">
                      <span>+994</span>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="XX XXX XX XX"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      type="button"
                      className="w-full"
                      onClick={handleLogin}
                      disabled={loginLoading}
                    >
                      {loginLoading ? (
                        <Spinner show size="small" className="text-white" />
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
