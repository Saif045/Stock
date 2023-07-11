"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import ClientOnly from "../ClientOnly";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <AnimatePresence>
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer relative shrink-0   ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ",
          className
        )}
        {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none">
          <path
            d="M10.9963 16.176L5.88262 18.8924C5.61543 19.052 5.25176 19.026 4.97344 18.8293C4.69883 18.6326 4.56152 18.2912 4.58379 17.9572L5.58945 12.1867L1.46697 8.09727C1.22724 7.86348 1.14226 7.51094 1.24765 7.18809C1.35267 6.86895 1.62988 6.63516 1.96349 6.58691L7.64902 5.74453L10.1947 0.501719C10.3469 0.194787 10.6549 0 10.9963 0C11.3377 0 11.6494 0.194824 11.7978 0.501719L14.3436 5.74453L20.0324 6.58691C20.3664 6.63516 20.641 6.86895 20.7486 7.18809C20.8525 7.51094 20.7672 7.86348 20.5297 8.09727L16.4031 12.1867L17.3791 17.9572C17.4348 18.2912 17.2975 18.6326 17.0191 18.8293C16.7445 19.026 16.3475 19.052 16.0803 18.8924L10.9963 16.176ZM8.71777 6.26406C8.54707 6.6166 8.21308 6.86152 7.82344 6.9209L2.72424 7.67422L6.42812 11.3406C6.69902 11.6115 6.82519 12.0012 6.76211 12.3834L5.88633 17.5602L10.4359 15.1295C10.7885 14.9402 11.2078 14.9402 11.5566 15.1295L16.1062 17.5602L15.2342 12.3834C15.1674 12.0012 15.2936 11.6115 15.5682 11.3406L19.2717 7.67422L14.1691 6.9209C13.7498 6.86152 13.4158 6.6166 13.2748 6.26406L10.9963 1.57047L8.71777 6.26406Z"
            fill="#D7DBE0"
          />
        </svg>
        <CheckboxPrimitive.Indicator
          className={cn(
            "flex items-center justify-center text-current absolute inset-0  "
          )}>
          {props.checked && (
            <motion.svg
              key={props.id == "0" ? props.id + "a" : props.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: [1.4, 1],
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none">
              <path
                d="M10.9963 16.176L5.88262 18.8924C5.61543 19.052 5.25176 19.026 4.97344 18.8293C4.69883 18.6326 4.56152 18.2912 4.58379 17.9572L5.58945 12.1867L1.46697 8.09727C1.22724 7.86348 1.14226 7.51094 1.24765 7.18809C1.35267 6.86895 1.62988 6.63516 1.96349 6.58691L7.64902 5.74453L10.1947 0.501719C10.3469 0.194787 10.6549 0 10.9963 0C11.3377 0 11.6494 0.194824 11.7978 0.501719L14.3436 5.74453L20.0324 6.58691C20.3664 6.63516 20.641 6.86895 20.7486 7.18809C20.8525 7.51094 20.7672 7.86348 20.5297 8.09727L16.4031 12.1867L17.3791 17.9572C17.4348 18.2912 17.2975 18.6326 17.0191 18.8293C16.7445 19.026 16.3475 19.052 16.0803 18.8924L10.9963 16.176Z"
                fill="#069D6E"
              />
            </motion.svg>
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </AnimatePresence>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
