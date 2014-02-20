/*
 * This program demonstrates invocation of the sys_reboot
 * system call (169) using the syscall function.  The program 
 * SHOULD restart the computer.
 *
 * Note: Ran on a 64bit ubuntu machine. Must have root access to run.
 *
 * WARNING: This syscall froze my linux virtual machine. Not sure why
 * but I like the idea of this system call.
 *
 */
#include <linux/types.h>
#include <linux/unistd.h>
#include <linux/kernel.h>
#include <string.h>
#include <stdio.h>
#include <linux/reboot.h>

int main(int argc, char *argv[]) {
    int magic_1 = 0xFEE1DEAD;
    // Linus Torvalds birthday in dd/mm/yyyy format :)
    int magic_2 = 0x28121969; 
    int cmd_restart = 0xa1b2c3d4;

    int result = syscall(169, magic_1, magic_2, cmd_restart);

    if (result == -1) {
        char *errorMessage = "Herp\n";
        syscall(1, 0, errorMessage, strlen(errorMessage));
    } 
}
