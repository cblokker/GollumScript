/*
 * This program demonstrates invocation of the rmdir
 * system call (84) using the syscall function.
 *
 * Note: Ran on a 64bit ubuntu machine 
 *
 */
#include <linux/types.h>
#include <linux/unistd.h>
#include <string.h>

int main(int argc, char *argv[]) {
    int result = syscall(84, argv[1]);

    // A result of -1 means that something went wrong.
    if (result == -1) {
        char *errorMessage = "Something went wrong. Maybe the directory doesn't exist\n";
        syscall(1, 0, errorMessage, strlen(errorMessage));
    }
}
