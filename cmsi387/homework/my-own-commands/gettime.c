/*
 * This program demonstrates invocation of the sys_clock_gettime
 * system call (228) using the syscall function.  The program 
 * prints the current epoch time to stdio.
 *
 * Note: Ran on a 64bit ubuntu machine.
 *
 */
#include <linux/types.h>
#include <linux/unistd.h>
#include <linux/kernel.h>
#include <time.h>
#include <stdio.h>


int main(int argc, char *argv[]) {
    struct timespec  result;

    syscall(228, CLOCK_REALTIME, &result);

    printf("%ld\n", (long)result.tv_sec);
}
