const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex mt-12 items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
